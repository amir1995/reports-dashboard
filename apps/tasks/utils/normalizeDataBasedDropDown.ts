import {TDropDownItem} from "@/types/types/dataTypes";

export function normalizeDataBasedDropDown(data:any, idLabel: string): TDropDownItem[] {
  return data?.length ? data.reduce((acc, cur) => {
    acc = [...acc, {label: cur.name, id: cur[idLabel]}]
    return acc
  }, []) : []
}
