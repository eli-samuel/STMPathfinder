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
        super();
    }

    /**
     * Default Stations constructor
     */
    public Stations(int numExits, String stationName, String lineColor, boolean direction, boolean isConnection, Strin g) {
        super();
        this.numExits = numExits;
        this.stationName = stationName;
        this.lineColor = lineColor;
        this.direction = direction;
        this.isConnection = isConnection;
        this.g = g;
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
    public boolean isDirection() {
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
    public boolean isIsConnection() {
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
     * Returns value of g
     * @return
     */
    public Strin getG() {
        return g;
    }

    /**
     * Sets new value of g
     * @param
     */
    public void setG(Strin g) {
        this.g = g;
    }

    /**
     * Create string representation of Stations for printing
     * @return
     */
    @Override
    public String toString() {
        return "Stations [numExits=" + numExits + ", stationName=" + stationName + ", lineColor=" + lineColor + ", direction=" + direction + ", isConnection=" + isConnection + ", g=" + g + "]";
    }
}
