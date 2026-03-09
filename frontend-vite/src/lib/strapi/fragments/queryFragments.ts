// RESTAPI Queries mit qs module

//item fragment
export const ButtonFragment = {
    button: {
        populate: {
            icon:{
                fields:["formats"]
            }
        }
    }
}

export const ImageFragment ={
    image:true
}

export const BackgroundImageFragment = {
    bgImage: true
}

//component fragments
export const jumbotronFragment = {
    'components.jumbotron': {
        populate: {
            ...ButtonFragment,
            ...BackgroundImageFragment
        },
    }
}

export const referenceElementFragment = {
    'elements.reference-element': {
        populate: {
            ...ImageFragment,
            items: {
                populate: {
                    ...ButtonFragment,
                    ...ImageFragment
                }
            }
        }
    }
}

export const gridElementFragment = {
    'elements.grid-element': {
        populate: {
            ...ImageFragment,
            items: {
                populate: {
                    ...ButtonFragment,
                    ...BackgroundImageFragment
                }
            }
        }
    }
}

export const ctaElementFragment = {
    'elements.cta-element': {
        populate: {
            button:true
        },
    }
}