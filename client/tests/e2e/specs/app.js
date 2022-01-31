// https://docs.cypress.io/api/introduction/api.html
import moment from "moment"

describe("WhatToDo App", function() {
    beforeEach(function() {
        cy.request( "POST", "http://localhost:5000/api/testing/reset" )
        cy.createTodo({ description: "Initial Task", deadline: new Date(), priority: null })
        cy.createProject({ name: "Test Project" })
        cy.visit("http://localhost:8080")
    })

    it("front page can be opened", function() {
        cy.wait(300)
        cy.contains("WhatToDo")
        cy.contains("Todos")
        cy.contains("Projects")
    })

    it("front page contains initial todos", function() {
        cy.contains("Initial Task")
    })

    describe("Todo", function() {
        it("can add a task", function() {
            cy.get('.add-dial').click()
            cy.get(".add-dial-content").children().eq(1).click()
            cy.wait(500)
            cy.get("input[name*='add-todo-desc']").focus().type("Testing Implementation", { force: true })
            cy.wait(300)
            cy
                .get(".dtime-input")
                .children()
                .children()
                .children()
                .children()
                .children()
                .children()
                .type("11:00", { force: true })
            cy.get(".endornment-container").children().eq(0).click()
            cy.get(".priority-item").children().eq(1).click()
            cy.wait(200)
            cy.get(".add-todo-btn").click({ force: true })

            cy.get(".todo-description").should("have.length", 2)
            cy.get(".todo-description").eq(0).should("contain", "Testing Implementation")
            cy.get(".todo-description").eq(1).should("contain", "Initial Task")
            cy.get(".p-normal").children().eq(0).should("have.css", "color", "rgb(255, 0, 0)")
            cy
                .get(".todo-container")
                .should("contain", `${moment(new Date()).format("DD-MM-YYYY")} 11:00 AM`)
        })
    
        it("can edit a task", function() {
            cy
                .get(".todo-more-icon").eq(0).click()
                .get(".edit-todo-item").eq(0).click()
            cy.get("input[name*='edit-todo-desc']").clear().type("Testing", { force: true })
            cy.get(".edit-todo-btn").click({ force: true })
            cy
                .get(".todo-container")
                .should("contain", moment(new Date()).format("DD-MM-YYYY hh:mm"))
            cy.get(".p-normal").children().eq(0).should("have.css", "color", "rgb(70, 74, 104)")
            cy.get(".todo-container").should("contain", "Testing")
            cy.get(".todo-container").should("not.contain", "Initial Task")
        })

        it("can delete a task", function() {
            cy
                .get(".todo-more-icon").click()
                .get(".edit-todo-item").eq(1).click()
            cy.on('window:confirm', () => true)
            cy.contains("No Todo")
        })
    })

    describe("Project", function() {
        beforeEach(function() {
            cy.get(".tab-menu").click()
        })

        it("contains initial project", function() {
            cy.contains("Test Project")
        })

        it("can create project", function() {
            cy.get('.add-dial').click()
            cy.get(".add-dial-content").children().eq(0).click()
            cy.get("input[name*='project-name']").type("New Project", { force: true })
            cy.get(".add-project-btn").click()
            cy.get(".va-collapse").should("have.length", 2)
            cy.get(".va-collapse__header__text").eq(0).should("contain", "New Project")
            cy.get(".va-collapse__header__text").eq(1).should("contain", "Test Project")
        })

        it("can add todo to project", function() {
            cy.get(".va-collapse").click()
            cy.get(".project-toolbar div").first().click()
            cy.get("input[name*='add-todo-desc']").focus().type("First Task", { force: true })
            cy.wait(300)
            cy
                .get(".dtime-input")
                .children()
                .children()
                .children()
                .children()
                .children()
                .children()
                .type("9:00", { force: true })
            cy.get(".endornment-container").children().eq(0).click()
            cy.get(".priority-item").children().eq(2).click()
            cy.wait(200)
            cy.get(".add-todo-btn").click({ force: true })
            cy.get(".todo-description").should("contain", "First Task")
            cy.get(".todo-extra").should("contain", `${moment(new Date()).format("DD-MM-YYYY hh:mm")}`)
            cy.get(".todo-details div").should('have.class', 'p-med')
            cy.get(".p-med").should("have.css", "color", "rgb(255, 165, 0)")
        })

        it("can edit project", function() {
            cy.get(".toolbar-edit").click({ force: true })
            cy.get("input[name*='edit-proj-name']").clear().type("Edited Project", { force: true })
            cy.get(".edit-project-btn").click()
            cy.get(".va-collapse__header__text").eq(0).should("contain", "Edited Project")
        })

        it("can delete project", function() {
            cy.get(".va-collapse").click()
            cy.get(".toolbar-delete").click({ force: true })
            cy.on('window:confirm', () => true)
            cy.contains("No Project")
        })
    })
})
