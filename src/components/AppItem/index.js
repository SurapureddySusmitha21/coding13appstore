// Write your code here
import './index.css'

const AppItem = props => {
  const {detailOfAppItem} = props
  const {appName, imageUrl} = detailOfAppItem
  return (
    <div className="s-container">
      <li className="list-app-container">
        <img src={imageUrl} alt={appName} className="image-url" />
        <p className="app-paragraph">{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
