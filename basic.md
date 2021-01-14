# Monolithic

All routing, middleware, business logic and database access to implement **all** features of the app.

# Microservice

All routing, middleware, business logic and database access to implement **one** features of the app.

## Storing Data in Microservice

- Every service needs its own database, this is in accordance to pattern **database per service**. Why database per service?

1. One service is independent of other service.
2. Database schema/structure might get changed unexpectedly.
3. Some service might function more efficiently when different type of database is used.

- Should not access one service database, by another service.

## Challenges of Microservice

Data Management in Microservice

### Approach to address this issue

> Communication between services.

- sync
- async

Sync Communication

When a request is made to a service which depends upon other services for serving its response, In sync com approach, requested service internally calls other services (say using http request or by other means) and then serves its request.

Upside

- Easily understandable
- Only db required service needs its own db, if a service depends upon other service's data, it doesn't needs its own db.

Downside

- Introduce dependency between service.
- It any inter-service request fails , overall request also fails.
- The entire request is as fast as the slowest inter-service request.
- Can introduce web of requests (say if depended service then calls its own depended services).

Async Communication

Method 1 - Introducing **event bus** to our system,

1. events will be emitted from one service, (events are basically like some node with contextual information required and what service it depends upon)
2. event bus will handle incoming events and route them to respective service.
3. other service will also emit a response to event bus which will also be routed to respective service that initiated an request event.

Method 2 - Create a database with required information only for a specific service. So that it will be self contained.
But problem here is data thats present in db is depended on other service.
To solve this issue,
After a data is inserted to database in a service, it simultaneously emits an event to event broker (event bus can also be said so), then interested service will also reflect that change in its own database.

Pros

1. Async Method 2 does not have dependency (ie to serve its own request).
2. Since its not depended on other service, it makes this service fast.

Cons

1. Data Duplication between services. (Cost won't be matter)
2. Harder to understand.
