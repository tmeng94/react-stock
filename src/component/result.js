import React from "react";

class SearchResult extends React.Component {
    render() {
        return (
            <div>
                <p>Result count: {this.props.data.nb_results}</p>
                {this.props.data.files.map(file => (
                    <div class="container" key={file.id}>
                        <h3>{file.title}</h3>
                        <h4>Author: {file.creator_name}</h4>
                        <h5>Category: {file.category.name}</h5>
                        <div dangerouslySetInnerHTML={{__html: file.thumbnail_html_tag}} />
                    </div>
                ))}
            </div>
        );
    }
}
export default SearchResult;