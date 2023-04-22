export interface HeadCell {
  id: "name" | "age" | "dateOfBirth" | "curriculumVitae" | "actions";
  label: string;
  minWidth?: number;
  numeric?: boolean;
  ellipsis?: boolean;
}

export interface Row {
  id: string;
  firstName: string;
  age: number;
  dateOfBirth: string;
  curriculumVitae: string;
}

export type CellOptions = Pick<HeadCell, "numeric" | "minWidth" | "ellipsis">;
