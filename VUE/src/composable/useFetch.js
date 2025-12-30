import { onMounted, ref } from "vue";

export function useFetch(url) {

    const data = ref(null)
    const error = ref(null)
    const loading = ref(false)

    const fetchData = async () => {
        loading.value = true
        error.value = null
        try {
           const res = await fetch(url.value); 
            if (!res.ok) {
                throw new Error('Error a la petició:' + res.status) //si no hi ha resposta positiva salta error
            }
            data.value = await res.json();
        } catch (err){
            error.value = err.message
        } finally {
            loading.value = false
        }
    
    }

    onMounted(fetchData); //fa la execució de la funció, fins que no estigui el component no disparara la funcio



    return { data, error, loading, fetchData }
}