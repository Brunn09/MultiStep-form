
const UserForm = ({data, updateFieldhandler}) => {
    return ( 
        <div>
            <div className="form_control">
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Digite seu nome" 
                    required
                    value={data.name || ''}
                    onChange={(event) => updateFieldhandler('name', event.target.value)}
                />
            </div>
            <div className="form_control">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email"
                    id="email" 
                    placeholder="Digite seu e-mail" 
                    required
                    value={data.email || ''}
                    onChange={(event) => updateFieldhandler('email', event.target.value)}
                />
            </div>
        </div>
    )
}

export default UserForm