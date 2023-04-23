export interface HeadCell {
  id: "name" | "age" | "dateOfBirth" | "curriculumVitae" | "actions";
  label: string;
  minWidth?: number;
  numeric?: boolean;
  ellipsis?: boolean;
}

export type CellOptions = Pick<HeadCell, "numeric" | "minWidth" | "ellipsis">;
