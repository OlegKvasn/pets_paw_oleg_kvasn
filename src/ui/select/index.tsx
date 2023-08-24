import styles from "./select.module.css";

const Select = (props: React.ComponentProps<"select">) => {
  return (
    <select {...props} className={`${styles.select} ${props.className}`}>
      {props.children}
    </select>
  );
};

function OptionItem(props: React.ComponentProps<"option">) {
  return (
    <option {...props} className={`${styles.option} ${props.className}`}>
      {props.children}
    </option>
  );
}

Select.Option = OptionItem;
export default Select;
