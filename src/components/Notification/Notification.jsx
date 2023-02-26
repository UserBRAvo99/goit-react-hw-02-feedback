import scss from './notification.module.scss'

function Notification({message}) {
    return (
        <p className={scss.p}>{message}</p>
    )
}
export default Notification