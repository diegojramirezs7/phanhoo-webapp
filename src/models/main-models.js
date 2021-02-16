export class Group {
    constructor({ id, name, members, ranking, city }) {
        this.id = id || "";
        this.name = name || "";
        this.members = members || [];
        this.ranking = ranking || 0;
        this.city = city || null;
    }
}

export class Community {
    constructor({ id, name, members, ranking }) {
        this.id = id || "";
        this.name = name || "";
        this.members = members || [];
        this.ranking = ranking || 0;
    }
}

export class Person {
    constructor({ id, name, age, email, bio }) {
        this.id = id || "";
        this.name = name || "";
        this.age = age || 0;
        this.email = email || "";
        this.bio = bio || "";
    }
}

export class Event {
    constructor({ id, title, description, time, location, group, host }) {
        this.id = id || "";
        this.title = title || "";
        this.description = description || "";
        this.time = time || "";
        this.location = location || null;
        this.group = group || null;
        this.host = host || null;
    }
}

export class Location {
    constructor({ id, name, latitude, longitude, address }) {
        this.id = id || "";
        this.name = name || "";
        this.latitude = latitude || 0;
        this.longitude = longitude || 0;
        this.address = address || "";
    }
}