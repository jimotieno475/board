const baseUrl="http://127.0.0.1:5555"

const useaxios=()=>{

    const request=async({
        url="login",
        data={},
        headers={},
        params={},
        method=""
    })=>{
        try {
            let res=useaxios({
                url:`${baseUrl}/${url}`,
                method:method,
                data:data,
                headers: {...headers, "Content-Type": "application/json"},
                params:params
            })
            return res.data
        } catch (e) {
            return "error"
        }
    }

    return request

}

export default useaxios