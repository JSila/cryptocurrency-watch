export default httpClient => {
    return store => {
        return dispatch => {
            return action => {
                const res = dispatch(action)
                return res
            }
        }
    }
}