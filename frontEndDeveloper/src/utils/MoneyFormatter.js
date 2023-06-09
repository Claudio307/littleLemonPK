const MoneyFormatter = (value) => {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};
export default MoneyFormatter;
