import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    constructor() {
        super()
        this.state = {
            posts: [], 
            newPostModal: false,
            updatePostModal: false,
            newPostData: { name: "", email: "", password: "" },
            updatePostData: { id:"", name: "", email:"", password:"" }
        }
    }

    loadPost() {
        axios.get('http://127.0.0.1:8000/api/participants').then((response) => {
            this.setState({
                posts: response.data
            })
        })
    }

    addPost() {
        axios.post('http://127.0.0.1:8000/api/participant', 
        this.state.newPostData).then((response) => {
            let { posts } = this.state
            this.loadPost()
            this.setState({
                posts,
                newPostModal: false,
                newPostData: { name: "", email: "", password: "" },
 
            })
        })
    }


    componentWillMount() {
        this.loadPost();
    }

    toggleNewPostModal() {
        this.setState({ newPostModal: !this.state.newPostModal })
       
    }

    toggleUpdatePostModal() {
        this.setState({
            updatePostModal: !this.state.updatePostModal
        })
    }

    render() {
        let posts = this.state.posts.map((post) => {
            return (
                <div key={post.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{post.name}</h5>
                        <p className="card-text">{post.email}</p>
                        <p className="card-text">{post.password}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="App container">
                <br></br><br></br><br></br><br></br>
                <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}>Add Participants</Button>
                <Modal isOpen={this.state.newPostModal} toggle={this.toggleNewPostModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewPostModal.bind(this)}>Add Participants 2206205</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input 
                                id="name" 
                                value={this.state.newPostData.name} 
                                onChange={(e) => {
                                    let { newPostData } = this.state
                                    newPostData.name = e.target.value
                                    this.setState({ newPostData })
                                }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input 
                                id="email" 
                                value={this.state.newPostData.email} 
                                onChange={(e) => {
                                    let { newPostData } = this.state
                                    newPostData.email = e.target.value
                                    this.setState({ newPostData })
                                }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input 
                                type="password"
                                id="password" 
                                value={this.state.newPostData.password} 
                                onChange={(e) => {
                                    let { newPostData } = this.state
                                    newPostData.password = e.target.value
                                    this.setState({ newPostData })
                                }} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addPost.bind(this)}>Add</Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewPostModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
