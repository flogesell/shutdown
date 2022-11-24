import axios from 'axios'

export default
async function getCSV(p_url)
{ return axios
    .get( p_url, { validateStatus: false })
    .then((response) => 
 { if (response.status === 200)
   { 
     return response.data }
   else
   { throw new Error(`'${response.config.url}' not found`) }
 }
)
}