//
import Card from "./Card";
import Paper from "./Paper";
import Input from "./Input";
import Table from "./Table";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Backdrop from "./Backdrop";
import Typography from "./Typography";
import Autocomplete from "./Autocomplete";
import Label from "./Label";
import Toolbar from "./Toolbar";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Label(theme),
    Paper(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme),
    Toolbar(theme)
  );
}
