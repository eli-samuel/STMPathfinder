import java.util.Arrays;

public class Stations {

    private int numExits;
    private String stationName;
    private String lineColor;
    private boolean direction; // true = something. false = other direction
    private boolean isConnection;
    private String[][] exitStats; // {{carNum, doorNum, exitName} = exit 1, { , , } = exit 2, { , , } = exit 3}


    /**
     * Default empty Stations constructor
     */
    public Stations() {
        //super();
    }

    /**
     * Default Stations constructor
     */
    public Stations(int numExits, String stationName, String lineColor, boolean direction, boolean isConnection) {
        //super();
        setNumExits(numExits);
        setStationName(stationName);
        setLineColor(lineColor);
        setDirection(direction);
        setIsConnection(isConnection);
    }


	/**
     * Returns value of numExits
     * @return
     */
    public int getNumExits() {
        return numExits;
    }

    /**
     * Sets new value of numExits
     * @param
     */
    public void setNumExits(int numExits) {
        this.numExits = numExits;
        setExitStats(numExits);
    }

    /**
     * Returns value of stationName
     * @return
     */
    public String getStationName() {
        return stationName;
    }

    /**
     * Sets new value of stationName
     * @param
     */
    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    /**
     * Returns value of lineColor
     * @return
     */
    public String getLineColor() {
        return lineColor;
    }

    /**
     * Sets new value of lineColor
     * @param
     */
    public void setLineColor(String lineColor) {
        this.lineColor = lineColor;
    }

    /**
     * Returns value of direction
     * @return
     */
    public boolean getIsDirection() {
        return direction;
    }

    /**
     * Sets new value of direction
     * @param
     */
    public void setDirection(boolean direction) {
        this.direction = direction;
    }

    /**
     * Returns value of isConnection
     * @return
     */
    public boolean getIsConnection() {
        return isConnection;
    }

    /**
     * Sets new value of isConnection
     * @param
     */
    public void setIsConnection(boolean isConnection) {
        this.isConnection = isConnection;
    }

    /**
     * Returns value of exitStats
     * @return
     */
    public String[][] getExitStats() {
        return exitStats;
    }

    /**
     * Sets new value of exitStats
     * @param
     */
    public void setExitStats(int exitStats) {
        this.exitStats = new String[numExits][3];
    }

    public void addStats(String[] stats) {
      int k=0;
      for (int i=0; i<exitStats.length; i++) {
        for (j=0 ;j<exitStats[i].length; j++) {
          exitStats[i][j] = stats[k];
          k++
        }
      }
    }

    /**
     * Create string representation of Stations for printing
     * @return
     */
    @Override
    public String toString() {
        return "Stations [numExits=" + numExits + ", stationName=" + stationName + ", lineColor=" + lineColor + ", direction=" + direction + ", isConnection=" + isConnection + ", exitStats=" + Arrays.deepToString(exitStats) + "]";
    }
}
