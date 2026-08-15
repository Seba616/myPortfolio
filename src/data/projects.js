import demoVideo from "../assets/project-demo.mp4";
import demoVideo2 from "../assets/project2-demo.mp4";

export const projects = [
  {
    id: 1,
    title: "Gasto Público en Chile - Análisis y Dashboard",
    dateRange: "2026",
    description:
      "Dashboard interactivo que analiza el gasto público en Chile a través de las órdenes de compra publicadas en Mercado Público (ChileCompra), respondiendo preguntas de negocio concretas sobre distribución geográfica, categorías de compra, estacionalidad y concentración institucional.",
    tags: ["Python", "Pandas", "Jupyter Notebook", "Streamlit", "Plotly"],
    website: "https://gasto-publico-cl.streamlit.app/",
    repo: "https://github.com/Seba616/gasto-publico-cl",
    video: demoVideo,
  },
  {
    id: 2,
    title:
      "Precios de Combustibles en Chile - Pipeline Automatizado y Dashboard",
    dateRange: "2026",
    description:
      "Pipeline de datos automatizado que consume la API de la Comisión Nacional de Energía (CNE) mediante n8n, almacenando el histórico de precios de ~1.800 estaciones de servicio en PostgreSQL. El dashboard interactivo en Streamlit combina esta fuente en tiempo real con una serie histórica oficial desde 1994, permitiendo comparar precios por región, comuna y marca, además de un buscador que identifica la estación más barata cerca del usuario.",
    tags: [
      "Python",
      "n8n",
      "PostgreSQL",
      "Streamlit",
      "Docker",
      "ETL",
      "API REST",
      "Automatización",
    ],
    website: "https://combustibles-cl.streamlit.app/",
    repo: "https://github.com/Seba616/combustibles-cl",
    video: demoVideo2,
  },
];
