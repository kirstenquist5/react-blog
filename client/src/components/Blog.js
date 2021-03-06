import React from 'react';
import axios from 'axios';
import BlogForm from './BlogForm';
import { Link } from 'react-router-dom'


class Blog extends React.Component {
  state = { blog: {}, posts: [], edit: false };
   
  componentDidMount() {
    axios.get(`/api/blogs/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ blog: res.data })
      })
  }

  handleDelete = (id) => {
    const remove = window.confirm("Are you sure you want to delete this blog?")
    if (remove)
      axios.delete(`/api/blogs/${id}`)
        .then( res => this.props.history.push('/blogs'))
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit}
    })
  }

  editBlog = () => {
    return <BlogForm {...this.state.blog} submit={this.submitBlog} />
  }

  submitBlog = (blog) => {
    axios.put(`/api/blogs/${this.props.match.params.id}`, { blog })
      .then(res => {
        this.setState({ blog: res.data, edit: false })
      })
  }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
      })
  }

  showBlog = () => {
    const { blog: { title, category } } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <h3>{category}</h3>
      </div>
    )
  }

  // listsPosts = () => {
  //   return this.state.posts.map(p => {
  //     return (
  //       <li>
  //       <Link to={`/blogs/${b.id}/posts`}>{p.name}</Link>
  //     </li>      )
  //   })
  // }
  

  render() {
    const { edit } = this.state
    return (
      <div>
        {edit ? this.editBlog() : this.showBlog()}
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }

}

export default Blog;