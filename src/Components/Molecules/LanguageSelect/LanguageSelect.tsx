import { useState, useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";

interface Props extends SelectProps {
  label: string;
  id: string;
  labelId: string;
  options: string[];
}

const LanguageSelect = (props: Props) => {
  const { label, labelId, id, options } = props;
  const [language, setLanguage] = useState(
    options.length ? options[0] : "None"
  );

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  }, []);

  const renderMenuItems = useCallback((items: string[]) => {
    return items.map((item) => {
      return (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      );
    });
  }, []);

  return (
    <FormControl variant="filled" size="medium" sx={{ minWidth: "80px" }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={language}
        onChange={(e) => handleChange(e)}
      >
        {renderMenuItems(options)}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
