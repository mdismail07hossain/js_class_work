function myform() {
  var nam = document.f.n.value;
  var emil = document.f.e.value;
  var add = document.f.add.value;
  var geander = document.f.Gender.value;
  var round = document.f.round.value;
  // var skill = document.f.skill.value;
  var skill = "";
  for (i = 0; i < document.f.skill.length; i++) {
    if (document.f.skill[i].checked) {
      skill += document.f.skill[i].value + ",";
    }
  }
  doc = open("", "", "width=400px, height=400px ,top=50px,left=100px");
  with (doc.document) {
    write("<html>");
    write("<head><title>" + title + "</title></head>");
    write("<body style='background-color:teal;color:white;padding:50px'>");
    write("<section style='border:1px solid gray;padding:20px'><section>");
    write("Name: " + nam + "<br>");
    write("Email: " + emil + "<br>");
    write("Address: " + add + "<br>");
    write("Gender: " + geander + "<br>");
    write("Round: " + round + "<br>");
    write("Skill: " + skill + "<br>");
    write(
      "<input style='background-color:red;color:white;outline:none;border:none' type='button' value='Close me' onclick='self.close()'>"
    );
    write(
      "<input style='background-color:skyblue;color:white;outline:none; border:none' type='button' value='Print me' onclick='self.print()'>"
    );
    write("</body");
    write("</html>");
  }
}
