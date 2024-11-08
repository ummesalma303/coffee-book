const getAllFavorite=()=>{
    const all= localStorage.getItem('favorites');
    if (all) {
        const favorite=JSON.parse(all)
        return favorite
    } else {
        return []
    }
}

const setAllFavorite=(id)=>{
    const favorite = getAllFavorite()
    if (favorite.includes(id)) {
        alert(id,'already exist')
    } else {
        favorite.push(id)
        const favoriteStr= JSON.stringify(favorite)
        localStorage.setItem('favorites',favoriteStr)
    }
}
export {setAllFavorite, getAllFavorite}