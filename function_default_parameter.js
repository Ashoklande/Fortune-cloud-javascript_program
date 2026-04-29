//default city of each student is pune

function studentprofile(id, name, city = "pune") {
  console.log({ id, name, city });
}

studentprofile(101, "Ashok Lande", "Dharashiv");
studentprofile(101, "Ashok Lande");
