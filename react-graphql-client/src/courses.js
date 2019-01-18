import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Course from './course';
const Courses = () => (
    <Query
        query={gql`
      {
        allcourses {
          id
          title
          author
          description
          topic
          url
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.allcourses.map((currentCourse,index) => (
                <Course key={index} course={currentCourse} />
            ));
        }}
    </Query>
);
export default Courses;