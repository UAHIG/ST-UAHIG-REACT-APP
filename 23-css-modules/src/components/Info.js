import './Info.css'
import styles from './Info.module.css'

// Этот обьект мы импортируем из ./Info.module.css'
// {
//   "info": "Info_info__s8vxq",
//   "myOtherButton": "Info_myOtherButton__8e85U"
// }

console.log(styles);

function Info() {
  return (
<div className={styles.info}>
<h1>Hello</h1>
<h2>Heading h2 info component</h2>
<button className='mybutton'>Clock me in the info component</button>
<button className={styles.myOtherButton}>Local CSS styles</button>
<button>No classname btn from info comp</button>

</div>
  )
}

export default Info;