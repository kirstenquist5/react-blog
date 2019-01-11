import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';

class Blogs extends React.Component {
  state = { blogs: [], showForm: false }

  componentDidMount() {
    axios.get('/api/blogs')
      .then(res => {
        this.setState({ blogs: res.data })
      })
  }
  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }

  blogForm = () => {
    return <BlogForm submit={this.submit} />
  }

  submit = (blog) => {
    axios.post('/api/blogs', { blog } )
    .then (res => {
      this.setState({ blogs: [res.data, ...this.state.blogs], showForm: false})
    })
  }

  listBlogs = () => {
    return this.state.blogs.map(b => {
      return (
        <ul key={b.id}>
          <li>
            <Link to={`/blogs/${b.id}`}>
              {b.title}
            </Link>
          </li>
        </ul>
      )
    })
  }

  render() {
    const { showForm } = this.state
    return (
      <div>
        <h2>BLOGS</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show'}</button>
        {showForm ? this.blogForm() : this.listBlogs()}
      </div>
    )
  }
}




export default Blogs;