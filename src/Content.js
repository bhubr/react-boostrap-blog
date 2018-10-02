import React from 'react';
import PostPreview from './PostPreview';

const articles = [
  {
    title: "React c'est chouette",
    subtitle: "1er article"
  },
  {
    title: "Avec Redux c'est encore mieux",
    subtitle: "Blablabla"
  },
  {
    title: "Mais avant ça on verra le state",
    subtitle: "encore un sous-titre"
  }
];

const Content = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        {
          articles.map(
            (article, index) => (
              <PostPreview
                key={index}
                title={article.title}
                subtitle={article.subtitle} />
            )
          )
        }
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
