import React from 'react';

class BlogForm extends React.Component {
  defaultValues = { title: '', category: ''}
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id) {
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const blog = { ...this.state }
    this.props.submit(blog)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { target: {name, value}} = e;
    this.setState({ [name]: value })
  }

  render() {
    const { title, category } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          name="title"
          onChange={this.handleChange}
          required
        />
        <input
          placeholder="Category"
          value={category}
          name="category"
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default BlogForm;