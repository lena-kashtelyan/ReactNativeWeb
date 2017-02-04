// Let's create a "real-time search" component

var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {


        var searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
        			<h2>Intro</h2>
              <p>Enter your zipcode below to start!</p>

                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Zipcode" />

                </div>;

    }
});



// Render the SearchExample component on the page

ReactDOM.render(
    <SearchExample />,
    document.getElementById('container')
);
