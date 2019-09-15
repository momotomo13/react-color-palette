import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palette.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmit(newPalette);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.stage === "emoji"}
          onClose={this.props.hideForm}
        >
          <DialogTitle id="form-dialog-title">絵文字を選んでね</DialogTitle>
          <Picker title="絵文字を選んでね" onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={this.state.stage === "form"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          onClose={this.props.hideForm}
        >
          <DialogTitle id="form-dialog-title">
            パレットに名前をつけよう
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                あなたのパレットに名前をつけてください。
              </DialogContentText>

              <TextValidator
                label="パレット名"
                value={this.state.newPaletteName}
                name="newPaletteName"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette nameを入力してね",
                  "もうすでにその名前は使われています"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.hideForm} color="primary">
                戻る
              </Button>
              <Button variant="contained" color="primary" type="submit">
                パレットを保存
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
