import User from '../src/user/user.model.js'

export const emailExists = async (email = '') => {
    const existe = await User.find0ne ({email})
    
    if(existe){
        throw new Error('El email ya está registrado')
    }
}

