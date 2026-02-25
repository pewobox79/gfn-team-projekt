// RESTAPI Queries mit qs module

//item fragment
export const ButtonFragment = {
    button: {
        populate: ['icon']
    }
}

export const BgImageFragment ={
    image:true
}

//component fragments
export const jumbotronFragment = {
    'components.jumbotron': {
        populate: {
            ...ButtonFragment,
        },
    }
}

export const referenceElementFragment = {
    'elements.reference-element': {
        populate: {
            items: {
                populate: {
                    ...ButtonFragment
                }
            }
        }
    }
}

export const gridElementFragment = {
    'elements.grid-element': {
        populate: {
            items: {
                populate: {
                    ...ButtonFragment,
                    ...BgImageFragment
                }
            }
        }
    }
}