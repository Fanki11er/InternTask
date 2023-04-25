import { useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props extends SelectProps {
  label: string;
  id: string;
  labelId: string;
  options: string[];
}

const LanguageSelect = (props: Props) => {
  const { label, labelId, id, options } = props;

  const { i18n } = useTranslation();

  const handleChange = useCallback((event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value.toLowerCase());
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
        value={i18n.resolvedLanguage.toUpperCase()}
        onChange={(e) => handleChange(e)}
      >
        {renderMenuItems(options)}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
