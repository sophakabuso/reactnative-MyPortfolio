import React from 'react';
import { ScrollView, View } from 'react-native';
import ProjectItem from './ProjectItem';

const HomeScreen = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'https://example.com/project1.jpg',
      liveDemoLink: 'https://example.com/project1-demo',
    },
    // Add more projects here
  ];

  return (
    <ScrollView>
      <View>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
