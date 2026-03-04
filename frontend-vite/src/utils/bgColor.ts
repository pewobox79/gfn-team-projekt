
export const getBgColor = (color: string) => {

    console.log("color", color)
    if (color == "red") {
        return `bg-${color}-600 text-white hover:text-black`
    }

    if (color == "white") {
        return `bg-${color} border border-black text-red-600 hover:text-black`
    }

    return `bg-${color} text-white hover:text-red-600`
}
