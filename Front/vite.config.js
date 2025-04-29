import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import withMT from "@material-tailwind/react/utils/withMT";
import svgr from "vite-plugin-svgr";


export default defineConfig(
  withMT({
    plugins: [react(), tailwindcss(),svgr()],
    theme: {
      extend: {
        fontFamily: {
          comfortaa: ["Comfortaa", "cursive"]
        }
      }
    }
  })
);
