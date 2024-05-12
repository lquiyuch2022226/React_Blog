export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textare,
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <div className="auth">

        </div>
    )
}