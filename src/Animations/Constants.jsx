import swatch from '../assets/swatch.png'
import file from '../assets/file.png'
import shirts from '../assets/logo-tshirt.png'
import styleshirt from '../assets/stylish-tshirt.png'
export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch
  },
  {
    name: "filepicker",
    icon: file
  },
 
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: shirts
  },
  {
    name: "stylishShirt",
    icon: styleshirt
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};