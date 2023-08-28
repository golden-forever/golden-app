declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

type Filter = { label: string; applied: string[]; include?: string };
type FilterRange = {
  label: string;
  value: [number, number];
  min: number;
  max: number;
};
type FilterLocation = {
  label: string;
  minToDrive: number;
  to: string;
  anywhere: boolean;
};

type RemoveTag = (filterData: Filter, removeIndex: number) => void;
type AddTag = (filterData: Filter, tag: string) => void;
type ClearAllTags = (filterData: Filter) => void;
