import './Post.css'

function Post(props) {
  const { id, title, url, userId, } = props

  return (
    <div className='post'>
      <small>{id}</small>
      <h2>{title}</h2>
      <img src={url} alt="" />
      <h3>Photo ID: {userId}</h3>
    </div>
  )
}

export default Post
