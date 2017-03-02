package org.virtue.game.entity.combat;

import org.virtue.game.world.region.Tile;

public class Projectile {

	private Tile from, to;
	private boolean adjustFlyingHeight, adjustSenderHeight;
	private int senderBodyPartId, graphicId, startHeight, endHeight, startTime,
			endTime, slope, angle;

	public Projectile(Tile from, Tile to, boolean adjustFlyingHeight,
			boolean adjustSenderHeight, int senderBodyPartId, int graphicId,
			int startHeight, int endHeight, int startTime, int endTime,
			int slope, int angle) {
		this.from = from;
		this.to = to;
		this.adjustFlyingHeight = adjustFlyingHeight;
		this.senderBodyPartId = senderBodyPartId;
		this.graphicId = graphicId;
		this.startHeight = startHeight;
		this.endHeight = endHeight;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slope = slope;
		this.angle = angle;
	}

	public Tile getFrom() {
		return from;
	}

	public Tile getTo() {
		return to;
	}

	public boolean isAdjustFlyingHeight() {
		return adjustFlyingHeight;
	}

	public boolean isAdjustSenderHeight() {
		return adjustSenderHeight;
	}

	public int getSenderBodyPart() {
		return senderBodyPartId;
	}

	public int getGraphicId() {
		return graphicId;
	}

	public int getStartHeight() {
		return startHeight;
	}

	public int getEndHeight() {
		return endHeight;
	}

	public int getStartTime() {
		return startTime;
	}

	public int getEndTime() {
		return endTime;
	}

	public int getSlope() {
		return slope;
	}

	public int getAngle() {
		return angle;
	}

}
