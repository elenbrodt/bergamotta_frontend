import baseApi from "./index.tsx"

interface SearchPayload {
    nome: string;
    email: string;
    idade: string;
}
//paciente/criar - para usar o DB do victor
export function cadastroPaciente(payload: PacientePayload) {
    return baseApi.post('/pacientes', payload)
}

export function listarPaciente(){
    return baseApi.get('/pacientes')
}