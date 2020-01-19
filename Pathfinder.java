public class Pathfinder {

  public static void main(String[] args) {

    // Stations(int numExits, String stationName, String lineColor, boolean direction, boolean isConnection, String[][] exitStats) {

    int[] numExits = {
      1, 3, 2, 3, 1, 1, 1, 2
    };

    String[] stationName = { "Villa Maria", "Snowdon", "Cartier", "Rosemont", "St Laurent", "Laurier", "Cadillac", "Outremont" };

    Stations[] stations = new Stations[8]; //{sta, sta, sta, sta, sta, sta}

    for (int i=0; i<stations.length; i++) {
      stations[i] = new Stations(numExits[i], stationName[i], "orange", true, false);
      stations[i].addStats({"2", "3", "Decarie", "5", "2", "a"});
    }

    Stations endStation = stations[2], startStation = stations[0];
    String exitStreet = "a";

    //pathfinding

    // same line = ez MAKE A METHOD LATER CUZ WE'RE GOING TO USE IT MORE THAN ONCE
    if (endStation.getLineColor().equals(startStation.getLineColor())) {
      for (int i=0; i<endStation.getExitStats().length; i++) {
        if (endStation.getExitStats()[i][2].equals(exitStreet)) {
          String carAndDoor = endStation.getExitStats()[i][0] + "\t" + endStation.getExitStats()[i][1];
          System.out.println(carAndDoor); // "5 2"
        }
      }
    }

    // diff = 3(x2-x1) + (y2-y1), where (x1 y1), (x2 y2) = (carNum, doorNum)

    if (


  }

}
