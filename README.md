# Software Requirements Specification
## For The Wayback Machine

Version 0.1  
Prepared by Mr. Kruskie  


Table of Contents
=================
* [Revision History](#revision-history)
* 1 [Introduction](#1-introduction)
  * 1.1 [Document Purpose](#11-document-purpose)
  * 1.2 [Product Scope](#12-product-scope)
  * 1.3 [Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
  * 1.4 [References](#14-references)
  * 1.5 [Document Overview](#15-document-overview)
* 2 [Product Overview](#2-product-overview)
  * 2.1 [Product Perspective](#21-product-perspective)
  * 2.2 [Product Functions](#22-product-functions)
  * 2.3 [Product Constraints](#23-product-constraints)
  * 2.4 [User Characteristics](#24-user-characteristics)
  * 2.5 [Assumptions and Dependencies](#25-assumptions-and-dependencies)
  * 2.6 [Apportioning of Requirements](#26-apportioning-of-requirements)
* 3 [Requirements](#3-requirements)
  * 3.1 [External Interfaces](#31-external-interfaces)
    * 3.1.1 [User Interfaces](#311-user-interfaces)
    * 3.1.2 [Hardware Interfaces](#312-hardware-interfaces)
    * 3.1.3 [Software Interfaces](#313-software-interfaces)
  * 3.2 [Functional](#32-functional)
  * 3.3 [Quality of Service](#33-quality-of-service)
    * 3.3.1 [Performance](#331-performance)
    * 3.3.2 [Security](#332-security)
    * 3.3.3 [Reliability](#333-reliability)
    * 3.3.4 [Availability](#334-availability)
  * 3.4 [Compliance](#34-compliance)
  * 3.5 [Design and Implementation](#35-design-and-implementation)
    * 3.5.1 [Installation](#351-installation)
    * 3.5.2 [Distribution](#352-distribution)
    * 3.5.3 [Maintainability](#353-maintainability)
    * 3.5.4 [Reusability](#354-reusability)
    * 3.5.5 [Portability](#355-portability)
    * 3.5.6 [Cost](#356-cost)
    * 3.5.7 [Deadline](#357-deadline)
    * 3.5.8 [Proof of Concept](#358-proof-of-concept)
* 4 [Verification](#4-verification)
* 5 [Appendixes](#5-appendixes)

## Revision History
| Name | Date    | Reason For Changes  | Version   |
| ---- | ------- | ------------------- | --------- |
|      |         |                     |           |
|      |         |                     |           |
|      |         |                     |           |

## 1. Introduction  
This document provides a comprehensive Software Requirements Specification (SRS) for **The Wayback Machine**, a desktop application designed to preserve and showcase previously developed student projects. The application will function as an interactive launcher and archival platform, allowing users to explore, view, and play past games created by students.

The system aims to support educational transparency, celebrate student achievements, and serve as a motivational and historical reference for current and future students. Users will be able to download and launch student-developed games, view project screenshots, read descriptions, and learn more about the creators behind each project.

This document outlines the purpose, scope, and functionality of the application, as well as its design constraints, user characteristics, assumptions, and dependencies. It serves as a reference for both development and evaluation of the software product.


### 1.1 Document Purpose  
The purpose of this Software Requirements Specification (SRS) is to provide a clear and detailed description of the functional and non-functional requirements for **The Wayback Machine**. This document serves as the foundation for all stages of development, guiding students through the planning, implementation, and testing phases of the project.

The intended audience includes student developers, instructors, project stakeholders, and any collaborators involved in the design or review of the software. By using this SRS, students will better understand the project goals, expected features, technical specifications, and constraints, ensuring that development remains focused and aligned with the intended outcome.


### 1.2 Product Scope  
This SRS describes the requirements for **The Wayback Machine**, Version 0.1, a desktop application designed to archive, present, and launch past student-created games and projects. The software serves as both a game launcher and a digital portfolio viewer, combining interactive functionality with a clean, visual interface that displays game-related media, student information, and download/play options.

The primary objective of The Wayback Machine is to celebrate and preserve student work in an accessible, engaging format. It offers benefits such as historical archiving of programming achievements, inspiration for future students, and a practical way to showcase the outcomes of project-based learning in a technical education environment.

The software aligns with educational goals by promoting student ownership of learning, reinforcing digital literacy, and supporting a culture of recognition and reflection. This SRS covers the full system as a standalone application and does not reference a broader platform or external vision document.

### 1.3 Definitions, Acronyms and Abbreviations

- **Web API**: A set of HTTP-based interfaces that allow communication between software applications, typically used to fetch or send data over the internet.
- **Desktop Application**: A software program that runs locally on a user’s computer, as opposed to web-based software which runs in a browser.
- **Git**: A distributed version control system used to track changes in source code during software development.
- **GitHub**: A cloud-based platform built around Git that facilitates code sharing, collaboration, and version control.
- **Process**: In the context of operating systems, a process is an instance of a running program, including its current activity and state.
- **JSON (JavaScript Object Notation)**: A lightweight data-interchange format that is easy to read and write for humans and easy to parse and generate for machines.
- **Launcher**: A software interface that provides access to a list of programs or games, often used in gaming environments to select and start titles.
- **Repository**: A centralized location where data is stored and managed, especially for source code in Git-based systems.
- **Executable (.exe)**: A type of computer file that runs a program when opened, typically used in Windows environments.
- **User Interface (UI)**: The visual part of the software with which users interact, including menus, buttons, images, and layout.

### 1.4 References

- **Classroom Branding Materials**  
  Google Drive Folder containing logos, style guides, and other design assets relevant to the visual design of The Wayback Machine.  
  [https://drive.google.com/drive/folders/1aLHFI0o9KDtMZ5ypmvFvLwBj8ZgwUkKx?usp=drive_link](https://drive.google.com/drive/folders/1aLHFI0o9KDtMZ5ypmvFvLwBj8ZgwUkKx?usp=drive_link)

- **Code Dojo Classroom Website**  
  Public-facing website for the Computer Programming program at the Bay-Arenac ISD Career Center. Contains examples of past projects and student work.  
  [https://codedojo.me](https://codedojo.me)


### 1.5 Document Overview  
The remainder of this document is organized to provide a complete description of the software requirements for **The Wayback Machine**.  

- **Section 2: Product Overview** describes the context, major features, constraints, target users, and dependencies of the software.  
- **Section 3: Requirements** outlines all detailed technical and functional requirements, including interface specifications, performance expectations, and implementation considerations.  
- **Section 4: Verification** describes how the software will be tested to ensure it meets the defined requirements.  
- **Section 5: Appendixes** includes any supplementary information or supporting documentation relevant to the project.

This structure ensures that developers, instructors, and stakeholders can easily navigate and understand the system’s purpose, design, and implementation roadmap.

## 2. Product Overview  
This section provides the background and context for **The Wayback Machine**, detailing the key factors that influence its design and functionality. It outlines the product’s role, main features, constraints, intended user base, and environmental assumptions.

The purpose of this section is to help stakeholders and developers understand the reasoning behind the requirements defined in Section 3. By clearly presenting the product’s overall scope and positioning, this section lays the foundation for building a system that aligns with user needs and instructional goals.

### 2.1 Product Perspective  
**The Wayback Machine** is a standalone product designed to run on a modified 1UP Rampage arcade cabinet. It serves as a dedicated kiosk-style application for viewing and launching past student-developed games, functioning independently of any existing school systems.

The system consists of two main components:

- **Web API**: This backend service connects to a database to store and manage all relevant data, including student information, game metadata, and associated media (e.g., screenshots, descriptions).
- **Launcher Application**: Installed on the arcade machine, this desktop-based interface fetches live data from the Web API and presents users with a curated, navigable gallery of past projects. Users can select and download games on demand, view related information, and launch games directly from the interface.

These components interact seamlessly to deliver real-time updates and access to archived student work. Although the software operates as a unified experience, the logical separation of backend and frontend allows for maintainability, scalability, and potential future extension to other platforms.

### 2.2 Product Functions  

**The Wayback Machine** will perform the following core functions:

- **Web API Functions**  
  - Store and serve a curated archive of student-created games.  
  - Manage a backend database containing metadata for each game, including title, description, student author(s), and creation date.  
  - Handle image storage for game screenshots or promotional artwork.  
  - Provide structured JSON responses when queried by the launcher application.

- **Launcher Application Functions**  
  - Periodically fetch updated game and student information from the Web API in JSON format.  
  - Maintain a local offline copy of the most recent data to support limited functionality without internet access.  
  - Display an interactive interface allowing users to browse and search through past projects.  
  - Download and extract games on demand.  
  - Launch selected games directly from within the application.

These functions support the overarching goal of providing a seamless, engaging experience for browsing, learning about, and revisiting past student projects.

### 2.3 Product Constraints  

- **User Interface Constraints**  
  The launcher must support interaction via arcade hardware, including multiple joysticks and buttons, as well as a hidden keyboard and mouse for administrative use. All primary user actions should be accessible through the arcade controls to ensure an authentic arcade experience.

- **Hardware Constraints**  
  The software will run on a modified 1UP Rampage arcade cabinet. As such, the launcher must be optimized for a fixed screen resolution and hardware limitations of the cabinet’s internal PC or microcomputer.

- **Design Constraints**  
  The user interface must incorporate classroom branding elements, including logo placement, fonts, and color schemes consistent with official Code Dojo style guides.

- **Offline Functionality**  
  The launcher must be able to function with reduced capability in offline mode using the most recently stored JSON data from the Web API.

- **API Format**  
  The launcher must be compatible with the JSON data structure provided by the Web API. All communication between the launcher and the API must be lightweight and efficient to minimize bandwidth and processing needs.

- **Game Compatibility**  
  Downloaded games must be able to run in a Windows environment and be launched from the application without manual user configuration.

### 2.4 User Characteristics  

The Wayback Machine is designed for three primary user classes, each with different usage needs and technical expertise:

- **General Users (Students, Visitors, Guests)**  
  - **Frequency of Use**: Occasional to frequent  
  - **Technical Expertise**: Low  
  - **Access Level**: Public, restricted to browsing and launching games  
  - **Description**: These users interact with the launcher to view past projects and play archived student-created games. They rely solely on the arcade controls and do not have access to administrative functions. The system must be intuitive and visually engaging for this group.

- **Instructors / Program Administrators**  
  - **Frequency of Use**: Moderate  
  - **Technical Expertise**: Moderate to high  
  - **Access Level**: Administrative (may use hidden keyboard/mouse)  
  - **Description**: These users may update configuration settings, perform troubleshooting, or reset the launcher if needed. They require access to more advanced controls or tools not visible to general users.

- **Student Developers (Project Contributors)**  
  - **Frequency of Use**: Infrequent (during development or testing)  
  - **Technical Expertise**: Moderate  
  - **Access Level**: None through the launcher, but relevant to the API/backend  
  - **Description**: Students contributing projects will indirectly interact with the system by submitting games and associated media to be uploaded into the database. Their technical involvement is outside the launcher itself but is important to the ongoing usefulness of the platform.

The most critical group to satisfy is the **general user**, as the launcher is intended to provide a seamless and engaging experience to showcase student work.

### 2.5 Assumptions and Dependencies  

The following assumptions and dependencies may impact the functionality or implementation of The Wayback Machine:

- **GitHub Integration**  
  It is assumed that GitHub will be used as the primary storage location for student projects. Each game will be stored in its own repository, and the repository URL will be saved in the database.

- **Git Installation**  
  The launcher will depend on Git being installed on the host machine in order to clone repositories from GitHub when users select a game to download.

- **Internet Access**  
  The system assumes periodic internet access is available for updating the game list, cloning repositories, and retrieving metadata from the Web API. While the launcher will support offline mode with cached data, core functionality such as downloading games requires connectivity.

- **API Availability**  
  The Web API must be hosted and accessible by the launcher. Any outage or misconfiguration of the API could prevent the launcher from retrieving updated game information.

- **Database Structure**  
  It is assumed the backend database will be properly maintained and structured to support queries for game metadata, images, and repository links. Any changes to the database schema may require launcher or API adjustments.

- **Windows Operating System**  
  It is assumed the arcade machine will run a compatible version of Windows capable of executing .exe game files and supporting the necessary tools (e.g., Git, Python, .NET).

### 2.6 Apportioning of Requirements  

The software requirements for **The Wayback Machine** are divided between two main components: the Web API and the Launcher Application. The table below summarizes which software element is responsible for each major function.

| Function                                          | Web API | Launcher |
|--------------------------------------------------|---------|----------|
| Store student game metadata in database          | ✅      |          |
| Store GitHub repository URLs                     | ✅      |          |
| Store and serve game-related images              | ✅      |          |
| Provide JSON responses to launcher requests      | ✅      |          |
| Retrieve and display game/project information    |         | ✅        |
| Maintain offline cache of JSON data              |         | ✅        |
| Download games via Git clone                     |         | ✅        |
| Launch executable game files                     |         | ✅        |
| Apply classroom branding in UI                   |         | ✅        |
| Support input from arcade controls               |         | ✅        |

Some future enhancements (such as analytics tracking or user feedback features) may require further allocation or modification of these responsibilities. For now, each requirement is clearly associated with one of the two core software elements.


## 3. Requirements
> This section specifies the software product's requirements. Specify all of the software requirements to a level of detail sufficient to enable designers to design a software system to satisfy those requirements, and to enable testers to test that the software system satisfies those requirements.

> The specific requirements should:
* Be uniquely identifiable.
* State the subject of the requirement (e.g., system, software, etc.) and what shall be done.
* Optionally state the conditions and constraints, if any.
* Describe every input (stimulus) into the software system, every output (response) from the software system, and all functions performed by the software system in response to an input or in support of an output.
* Be verifiable (e.g., the requirement realization can be proven to the customer's satisfaction)
* Conform to agreed upon syntax, keywords, and terms.

### 3.1 External Interfaces
> This subsection defines all the inputs into and outputs requirements of the software system. Each interface defined may include the following content:
* Name of item
* Source of input or destination of output
* Valid range, accuracy, and/or tolerance
* Units of measure
* Timing
* Relationships to other inputs/outputs
* Screen formats/organization
* Window formats/organization
* Data formats
* Command formats
* End messages

#### 3.1.1 User interfaces
Define the software components for which a user interface is needed. Describe the logical characteristics of each interface between the software product and the users. This may include sample screen images, any GUI standards or product family style guides that are to be followed, screen layout constraints, standard buttons and functions (e.g., help) that will appear on every screen, keyboard shortcuts, error message display standards, and so on. Details of the user interface design should be documented in a separate user interface specification.

Could be further divided into Usability and Convenience requirements.

#### 3.1.2 Hardware interfaces
Describe the logical and physical characteristics of each interface between the software product and the hardware components of the system. This may include the supported device types, the nature of the data and control interactions between the software and the hardware, and communication protocols to be used.

#### 3.1.3 Software interfaces
Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Describe the services needed and the nature of communications. Refer to documents that describe detailed application programming interface protocols. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way (for example, use of a global data area in a multitasking operating system), specify this as an implementation constraint.

### 3.2 Functional
> This section specifies the requirements of functional effects that the software-to-be is to have on its environment.

### 3.3 Quality of Service
> This section states additional, quality-related property requirements that the functional effects of the software should present.

#### 3.3.1 Performance
If there are performance requirements for the product under various circumstances, state them here and explain their rationale, to help the developers understand the intent and make suitable design choices. Specify the timing relationships for real time systems. Make such requirements as specific as possible. You may need to state performance requirements for individual functional requirements or features.

#### 3.3.2 Security
Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.

#### 3.3.3 Reliability
Specify the factors required to establish the required reliability of the software system at time of delivery.

#### 3.3.4 Availability
Specify the factors required to guarantee a defined availability level for the entire system such as checkpoint, recovery, and restart.

### 3.4 Compliance
Specify the requirements derived from existing standards or regulations, including:  
* Report format
* Data naming
* Accounting procedures
* Audit tracing

For example, this could specify the requirement for software to trace processing activity. Such traces are needed for some applications to meet minimum regulatory or financial standards. An audit trace requirement may, for example, state that all changes to a payroll database shall be recorded in a trace file with before and after values.

### 3.5 Design and Implementation

#### 3.5.1 Installation
Constraints to ensure that the software-to-be will run smoothly on the target implementation platform.

#### 3.5.2 Distribution
Constraints on software components to fit the geographically distributed structure of the host organization, the distribution of data to be processed, or the distribution of devices to be controlled.

#### 3.5.3 Maintainability
Specify attributes of software that relate to the ease of maintenance of the software itself. These may include requirements for certain modularity, interfaces, or complexity limitation. Requirements should not be placed here just because they are thought to be good design practices.

#### 3.5.4 Reusability
<!-- TODO: come up with a description -->

#### 3.5.5 Portability
Specify attributes of software that relate to the ease of porting the software to other host machines and/or operating systems.

#### 3.5.6 Cost
Specify monetary cost of the software product.

#### 3.5.7 Deadline
Specify schedule for delivery of the software product.

#### 3.5.8 Proof of Concept
<!-- TODO: come up with a description -->

## 4. Verification
> This section provides the verification approaches and methods planned to qualify the software. The information items for verification are recommended to be given in a parallel manner with the requirement items in Section 3. The purpose of the verification process is to provide objective evidence that a system or system element fulfills its specified requirements and characteristics.

<!-- TODO: give more guidance, similar to section 3 -->
<!-- ieee 15288:2015 -->

## 5. Appendixes
