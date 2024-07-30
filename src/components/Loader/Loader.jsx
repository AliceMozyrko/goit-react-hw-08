import { InfinitySpin } from 'react-loader-spinner'
import css from "./Loader.module.css"
export default function Loader() {
  return (
    <div className={css.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#8b0000"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  )
  
}