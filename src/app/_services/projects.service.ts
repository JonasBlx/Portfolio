import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0,
      name: 'Classification de structures 3D',
      summary: "Création d'un algorithme basé sur du machine et deep learning afin de classifier des structures minecraft",
      description: "Création d'un programme s'appuyant sur des algorithme de machine et deep learning prenant en paramètres les données structurelles (position, matière et orientation des blocs) de différents objets minecraft afin de les classifier parmi une liste de classes définies. La partie collecte des données représente ici une grande partie du travail, notamment il faut créer des données empéchant le surapprentissage par rapport au matériaux des blocs. Le développement de réseau de neurone 3D est également un point complexe à nos yeux.",
      projectLink: "https://github.com/",
      tags: [Tag.PYTHON, Tag.JAVA, Tag.TENSORFLOW],
      pictures: ["../../assets/analyse_structures.png", "../../assets/arbre_mc.png"]},
    {id: 1,
    name: 'Logiciel de bureau',
    summary: "Création d'un logiciel de bureau implémentant des modèles physiques complexes",
    description: "Création d'un logiciel de bureau implémentant des solveur inspirés de méthodes de dynamique des structures en python (Qt). Ainsi le logiciel assure plusieurs méthodes métier et traite les de grands tableaux de données. Les principales compétences mises en oeuvre au cours de ce projet ont été le traitement de données, le code orienté objet et l'architecture logicielle.",
    projectLink: "https://github.com/",
    tags: [Tag.PYTHON, Tag.QT],
    pictures: ["../../assets/devlogpython.png"]},
    {id: 2, 
    name: 'Évitement collision 3D', 
    summary: "Sacha doit remplir. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet felis at nisi vehicula, eu lacinia arcu facilisis.", 
    description:"idem",
    projectLink: "https://github.com/",
    tags: [Tag.PYTHON],
    pictures: []},
    {id: 3,
      name: 'Web App Portfolio',
      summary: "Création d'une web app portfolio de quelques pages permettant de nous présenter",
      description: "Création d'un portfolio à l'aide du framework angular. Il s'agit d'une web app simple partagée en plusieurs sections sur laquelle il est possible d'en apprendre plus sur nous, nos projets et comment nous contacter.",
      projectLink: "https://github.com/",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS],
      pictures: ["../../assets/webappang.png"]},
    ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: '+ id);
    }

    return project;
    }
  }
