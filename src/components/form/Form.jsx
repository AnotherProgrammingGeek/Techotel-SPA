import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            email: "", 
            phone: "", 
            company: "", 
            message: "", 
            
        }
    )
    
    const id = React.useId()
    
    function handleChange(event) {
        const {name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id + "-name"}>Name:</label>
            <input
                type="text"
                onChange={handleChange}
                name="name"
                value={formData.name}
                id={id + "-name"}
            />
            <label htmlFor={id + "-email"}>Email:</label>
            <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                id={id + "-email"}
            />
            <label htmlFor={id + "-phone"}>Phone:</label>
            <input
                type="text"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                id={id + "-phone"}
            />
            <label htmlFor={id + "-company"}>Company:</label>
            <input
                type="company"
                onChange={handleChange}
                name="company"
                value={formData.company}
                id={id + "-company"}
            />
            <label htmlFor={id + "-message"}>Message:</label>
            <textarea 
                value={formData.message}
                onChange={handleChange}
                name="message"
                id={id + "-message"}
                rows="10"
            />
            
            <button>Submit</button>
        </form>
    )
}