export interface HeadCell {
  id: "name" | "age" | "dateOfBirth" | "curriculumVitae" | "actions";
  label: string;
  minWidth?: number;
  numeric?: boolean;
  ellipsis?: boolean;
  //format?: (value: number) => string;
}

export interface Row {
  id: string;
  name: string;
  age: number;
  dateOfBirth: string;
  curriculumVitae: string;
}

export type CellOptions = Pick<HeadCell, "numeric" | "minWidth" | "ellipsis">;