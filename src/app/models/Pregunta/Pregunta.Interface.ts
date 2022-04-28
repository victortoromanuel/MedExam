export interface PreguntaI{
    IdPregunta: number;
    Pregunta: string;
    OpcionA?: string;
    OpcionB?: string;
    OpcionC?: string;
    OpcionD?: string;
    RespuestaCorrecta: string;
    Explicacion: string;
    IdEspecialidad: number;
}